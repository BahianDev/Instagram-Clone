import React from 'react';
import {View, Text, FlatList, Image, StyleSheet, TouchableOpacity} from 'react-native';
import options from '../../../assets/options.png'
import like from '../../../assets/like.png'
import comment from '../../../assets/comment.png'
import send from '../../../assets/send.png'
import save from '../../../assets/save.png'

function Feed(){
    const posts = [
        {
            id: '1',
            author: 'Wesley',
            picture_url: 'https://static1.purebreak.com.br/articles/2/42/91/2/@/198750-filme-solo-do-batman-com-ben-affleck-diapo-2.jpg',
            likes: '156',
            description: 'O Batman é muito foda',
            hashtags: '#Cinema #Batman',
            place: 'Cinema do Shopping'
        },
        {
            id: '2',
            author: 'Wesley',
            picture_url: 'data:image/jpeg;base64,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',
            likes: '156',
            description: 'O Batman é muito foda',
            hashtags: '#Cinema #Batman',
            place: 'Cinema do Shopping'
        },
        {
            id: '3',
            author: 'Wesley',
            picture_url: 'https://i.pinimg.com/originals/a6/28/b4/a628b4a70723b1bacc4c234cdc19b794.jpg',
            likes: '156',
            description: 'O Batman é muito foda',
            hashtags: '#Cinema #Batman',
            place: 'Cinema do Shopping'
        },
        
    ];

    function renderItem({item: post}){
        return (
            <View style={styles.post}>
                <View style={styles.postHeader}>
                    <View style={styles.userInfo}>
                        <Text style={styles.author}>{post.author}</Text>
                        <Text style={styles.place}>{post.place}</Text>
                    </View>            
                    <View style={styles.postOptions}>
                        <TouchableOpacity>
                            <Image source={options}/>
                        </TouchableOpacity>
                    </View> 
                </View>

                <View>
                    <Image style={styles.picture_url}  source={{uri: post.picture_url}}/>
                </View>

                <View style={styles.footer}>
                    <View style={styles.actions}>
                        <View style={styles.leftActions}> 
                            <TouchableOpacity style={styles.action}>
                                <Image source={like}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.action}>
                                <Image source={comment}/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={send}/>
                            </TouchableOpacity>
                        </View>

                        <View> 
                            <TouchableOpacity>
                                <Image source={save}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.likes}>{post.likes} likes</Text>
                        <Text style={styles.hashtags}>{post.hashtags}</Text>
                        <Text style={styles.comment}>{post.description}</Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View>
            <FlatList 
                data={posts}
                keyExtractor={(item)=> item.id}
                renderItem={renderItem}
            
            />
        </View>
    )
}


const styles = StyleSheet.create({
    post:{
        marginVertical: 15
    },
    postHeader:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center',
        marginBottom: 10
        
    },
    postOptions:{},
    userInfo:{},
    author:{
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold'
    },
    place:{
        fontSize: 12,
        color: '#666'
    },
    picture_url:{
        width: '100%',
        height: 400
    },
    footer:{
        paddingHorizontal: 15
    },
    actions:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15
    },
    action:{
        marginRight: 8
    },
    leftActions:{
        flexDirection: 'row'
    },
    likes:{
        fontWeight: 'bold'
    },
    hashtags:{
        color: '#002D5E'
    },
    description:{
        color: '#000',
        lineHeight: 18
    }
})


export default Feed;