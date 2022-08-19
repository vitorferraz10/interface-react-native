import React, { useRef, useState } from 'react';
import { Animated, FlatList } from 'react-native';

import { dataSlides } from '../../data/slides';
import { Card } from '../Card';



export function Carousel() {
   const [currentIndex, setCurrentIndex] = useState(0);
   const scrollx = useRef(new Animated.Value(0)).current;
   const slidesRef = useRef(null);
   const viewableItemsChanged = useRef(({ viewableItems }: any) => {
     setCurrentIndex(viewableItems[0].index);
   }).current;
   const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

 return (
   <FlatList
     keyExtractor={(item) => item.id}
     data={dataSlides}
     renderItem={({ item }) => <Card item={item} />}
     horizontal
     showsHorizontalScrollIndicator
     pagingEnabled
     bounces={false}
     onScroll={Animated.event(
       [{ nativeEvent: { contentOffset: { x: scrollx } } }],
       { useNativeDriver: false }
     )}
     onViewableItemsChanged={viewableItemsChanged}
     viewabilityConfig={viewConfig}
     ref={slidesRef}
     
   />
 );
}