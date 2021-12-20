import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Post from 'App/Models/Post';

export default class PostsController {
    // private static posts = [
    //     { id: 1, title: 'First Post', content: 'This is my first blog post' },
    //     { id: 2, title: 'Second Post', content: 'This is my second blog post' },
    // ]
    
    public async index () {
        return await Post.all()
    }
      
    public async show ({ params }: HttpContextContract) {
        return await Post.find(params.id)
    }
    
    // public async store ({ request }: HttpContextContract) {
    //     const data = request.only(['title', 'content'])
    //     const newId = PostsController.posts.length + 1
    //     const post = {
    //         id: newId,
    //         title: data.title,
    //         content: data.content,
    //     }
    //     PostsController.posts.push(post)
    //     return post
    // }
    public async store ({ request }: HttpContextContract) {
        const data = request.only(['title', 'content'])
        const post = {
          title: data.title,
          content: data.content,
        }
        return await Post.create(post)
    }
    // public async destroy ({ params }: HttpContextContract) {
    //     const postId = Number(params.id) //transform to number
    //     PostsController.posts = PostsController.posts.filter(p => p.id !== postId)
    // }
    // public async show ({ params }: HttpContextContract) {
    //     const postId = Number(params.id)
    //     return PostsController.posts.find(p => p.id === postId)
    // }
    public async destroy ({ params }: HttpContextContract) {
        const post = await Post.find(params.id)
        post?.delete()
    }
}
