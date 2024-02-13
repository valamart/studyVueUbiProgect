<template>
    <div>
        <h1>Posts Page</h1>
        <my-input
        v-focus
        v-model="searchQuery"
        placeholder="Search..."
        />
        <div class="app__buttons">
            <my-button
                @click="showDialog"
                >create Post
            </my-button>
            <my-select
            v-model="selectedSort"
            :options="sortOptions"
            />

        </div>

        <my-dialog v-model:show="dialogVisible">
            <post-form
                @create="createPost">
            </post-form>
        </my-dialog>
        <post-list
            v-if="!isPostsLoading"
            :posts="sortedAndSearchedPosts"
            @remove="removePost">
        </post-list>
        <div v-else ="isPostsLoading">Loading...</div>
        <div v-intersection="loadMorePosts" class="observer"></div>
        <!-- <div class="page__wrapper">
            <div
            class="page"
            :class="{
                'current-page': page === pageNumber
            }"
            @click="changePage(pageNumber)"
            v-for="pageNumber in totalPages"
            :key="pageNumber">
                {{ pageNumber }}
            </div>
        </div> -->

    </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import PostForm from '../components/PostForm.vue'
import MyButton from '../components/UI/MyButton.vue'
import axios from 'axios'
    export default {

        components: {
    PostForm,
    PostList,
    MyButton
},

        data() {
            return {
                posts:[],
                dialogVisible: false,
                isPostsLoading: false,
                searchQuery:'',
                selectedSort: '',
                page:1,
                limit:10,
                totalPages:0,
                sortOptions: [
                    { value: 'title', name: 'By Name'},
                    { value: 'body', name: 'By Text'},
                ]
            }
        },
        methods: {
            createPost(post) {
                this.posts.push(post)
                this.dialogVisible = false
            },
            removePost(post) {
                this.posts = this.posts.filter(p => p.id !== post.id)
            },
            showDialog() {
                this.dialogVisible = true
            },
            async fetchPosts() {
                this.isPostsLoading = true
                try {
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                        params: {
                            _page: this.page,
                            _limit: this.limit
                        }
                    })
                    this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                    this.posts = response.data}
                catch(e) {
                    alert('Error')
                } finally {
                    this.isPostsLoading = false
                }
            },
            async loadMorePosts() {

                try {
                    this.page += 1
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                        params: {
                            _page: this.page,
                            _limit: this.limit
                        }
                    })
                    this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                    this.posts = [...this.posts, ...response.data]}
                catch(e) {
                    alert('Error')
                }
            }
        },
        mounted() {
            this.fetchPosts();
        },
        computed:{
            sortedPosts() {
                return [...this.posts].sort((post1, post2)=> post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
            },
            sortedAndSearchedPosts() {
                return this.sortedPosts.filter((post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase())))
            }
        },
        watch: {
            // page() {
            //     this.fetchPosts()
            // }
        }
    }
</script>

<style>



.app__buttons {
    margin: 10px;
    display: flex;
    justify-content: space-between;
}

.page__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
}

.page {
    border: 1px solid black;
    padding: 10px;
    margin: 0 5px;
}

.page:hover, .current-page {
    background-color: black;
    color: white;
}
.observer {
    height: 30px;
    background: green;
}

</style>