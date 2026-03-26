import { ThemedView } from '@components/themed-view';
import { Post } from '@type/Post';
import { FlatList, StyleSheet } from 'react-native';
import { FeedPost } from './post/FeedPost';

function FeedList({ posts }: { posts: Post[] }) {
    const renderItem = ({ item }: { item: Post }) => <FeedPost post={item} />;
    return (
        <ThemedView style={styles.container}>
            <FlatList
                data={posts}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
});

export { FeedList };
