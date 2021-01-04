import React from 'react';
import VirtualScrollChild from '../virtualscroll/VirtualScroll'
import InfiniteScroll from '../infinitescroll/InfiniteScroll';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


/**
 * A wrapper component for implementing virtual and
 * infinite scrolling.
 */
function VirtualAndInfiniteScroll({listItems, height, lastRowHandler}) {
    const VirtualScrollChildren = listItems.map(listItem => 
        <VirtualScrollChild height={height} children={listItem}/>
    );

    return (
        <InfiniteScroll 
            listItems={VirtualScrollChildren} 
            lastRowHandler={lastRowHandler}
        />
    );
}

export default VirtualAndInfiniteScroll; 