import React, { Component } from 'react';

import { connect } from "react-redux";
import { bindActionCreators } from '@reduxjs/toolkit';

import { styles } from "./style";
import { Container, Grid, Paper } from '@material-ui/core';
import { HeaderComponent } from '../../components/header/header';

import { requestApiProducts } from "../../redux/actions/productos";
import ItemComponent from '../../components/item/item';

import VirtualAndInfiniteScroll from '../../components/virtualandinfinitescroll/VirtualAndInfinitescroll';

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

/**
 * Componente de la pantalla inicial que muestra la bienvenida al usuario con componentes de React desacoplados
 */
class Home extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            selected: [],
            loading: true,
            page: -1,
            productos: []
        };

        this.articulos = [];

        this.id2List = {
            droppable: 'posts',
            droppable2: 'selected'
        };

        this.recentMove = false;

        this.getList = this.getList.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    getList(id) {
        if(this.id2List[id] == 'selected')  {
            return this.state[this.id2List[id]];
        }   else    {
            return this.articulos;
        }
        
    }

    onDragEnd(result) {
        const { source, destination } = result;
    
        console.log(result);
    
        // Si se deja el elemento fuera de cualquier contenedor
        if (!result.destination) {
          return;
        }
    
        this.recentMove = true;

        if (source.droppableId === destination.droppableId) {
          const items = reorder(
              this.getList(source.droppableId),
              source.index,
              destination.index
          );
    
          let state = { posts: items };

          if (source.droppableId === 'droppable2') {
              state = { selected: items };
          }
    
          this.setState(state);
        } else {
          const result = move(
              this.getList(source.droppableId),
              this.getList(destination.droppableId),
              source,
              destination
          );
    
          this.articulos = result.droppable;
          this.setState({
              selected: result.droppable2
          });
        }
    }

    /**
     * Mandamos a llamar la información del visitante cuando se inicia la aplicación
     */
    componentDidMount() {
        this.changePage();
    }

    changePage()    {
        let { page } = this.state;
        page++

        if(page <= 1)   {
            const newState = { ...this.state };
            newState.page = page;
            this.setState(newState);

            this.props.requestApiProducts(page);
        }
        console.log(page);
    }

    render()  {
        const { products } = this.props;
        let { page, productos } = this.state;

        // Arreglo, me disculpo por este, ya que es un parche debido a que las paginaciones no venían desde el servicio en orden
        if (products)    {
            if(page == 1)   {
                products.data.products.forEach((element) => {
                    let founded = false;
                    let founded_shoppingcart = false;

                    founded = this.articulos.find((item) => {
                        return element.sku == item.sku
                    });

                    founded_shoppingcart = this.state.selected.find((item) => {
                        return element.sku == item.sku
                    });

                    if(!founded && !founded_shoppingcart)    {
                        this.articulos.push(element);
                    }
                });
            }   else
            if(page == 0 && !this.recentMove)   {
                this.articulos = products.data.products;
            }
        }

        return (
            <Container style={styles.body} maxWidth="lg">
                <HeaderComponent 
                    mostrarBotonInicio={true}
                />

                <Grid container spacing={3} style={styles.grid_master}>
                    <DragDropContext onDragEnd={this.onDragEnd}>
                        <Grid item xs={8} style={styles.grid}>
                            {(this.articulos.length == 0 && this.state.selected.length == 0) ? (
                                <h1 style={{color: '#000'}}>Cargando...</h1>
                            ): (<span/>)}

                                <Droppable droppableId="droppable">
                                    {(provided, snapshot) => (
                                        <div
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                        >
                                            <VirtualAndInfiniteScroll
                                                listItems=
                                                {this.articulos.map((element, index) => (
                                                    <Draggable key={element.sku} draggableId={element.sku} index={index}>
                                                        {(provided, snapshot) => (
                                                            <div
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                            >
                                                                <ItemComponent element={element}/>
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                ))}
                                                height={150}
                                                lastRowHandler={() => {
                                                    this.changePage();
                                                    console.log('Mostrando');
                                                }}
                                            />
                                        </div>
                                    )}
                                </Droppable>
                                
                        </Grid>

                        <Grid item xs={4} style={styles.gridCarrito}>
                            <h2>Arrastra aquí el artículo</h2>
                            <Droppable droppableId="droppable2">
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                    >
                                        {this.state.selected.map((element, index) => (
                                            <Draggable key={element.sku} draggableId={element.sku} index={index}>
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        <ItemComponent element={element}/>
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </Grid>
                    </DragDropContext>
                </Grid>
            </Container>
        );
    }
}

/**
 * Función para facilitar el reordenamiento en caso de querer reordenar los artículos
 * @param {*} list 
 * @param {*} startIndex 
 * @param {*} endIndex 
 */
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

/**
 * Función para movilizar de un lugar a otro las tarjetas
 * @param {*} source 
 * @param {*} destination 
 * @param {*} droppableSource 
 * @param {*} droppableDestination 
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

/**
 * Mapeamos el estado desde Redux a las propiedades del componente
 * @param {*} state 
 */
const mapStateToProps = state => ({
  products: state.products
});

/**
 * Mapeamos los metodos desde el estado desde Redux
 * @param {*} dispatch 
 */
const mapDispatchToProps = dispatch => bindActionCreators({ requestApiProducts }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);