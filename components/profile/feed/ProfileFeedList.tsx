import { Dimensions, FlatList, StyleSheet } from 'react-native';
import { Post } from '@type/Post';
import { Image } from 'expo-image';
import { resolveImageSource } from '@/utils/image';
import { Grid } from '@/constants/theme';
import React from 'react';

const { width } = Dimensions.get('window');
const ITEM_SIZE = width / Grid.profileColumnCount;

export default function ProfileFeedList({ posts, header }: { posts: Post[]; header?: React.ReactElement }) {
    const renderItem = ({ item }: { item: Post }) => (
        <Image
            style={styles.image}
            contentFit={'cover'}
            source={resolveImageSource(item.images[0])}
        />
    );

    return (
        <FlatList
            style={styles.container}
            data={posts}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            numColumns={Grid.profileColumnCount}
            ListHeaderComponent={header}
        />
    );
}

const styles = StyleSheet.create({
    image: {
        height: ITEM_SIZE * Grid.profileImageRatio,
        width: ITEM_SIZE - Grid.gap,
        paddingRight: 1.5 * Grid.gap,
        paddingBottom: 1.5 * Grid.gap,
    },
    container: {
        flex: 1,
    },
});
