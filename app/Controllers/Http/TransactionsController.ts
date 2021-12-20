import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Transaction from 'App/Models/Transaction';

export default class TransactionsController {
    public async index () {
        return await Transaction.all()
    }
      
    public async show ({ params }: HttpContextContract) {
        return await Transaction.find(params.id)
    }
    public async store ({ request, response }: HttpContextContract) {
        const data = request.only(['customerName', 'amount', 'description', 'type']);
        const post = {
            customerName: data.customerName,
            amount: data.amount,
            description: data.description,
            type: data.type
        };
        await Transaction.create(post);
        return response.json({"message": "Record created successfully! "});
    }
    public async update ({ params, request, response }: HttpContextContract) {
        
        const data = request.only(['customerName', 'amount', 'description', 'type']);
    
        let trans = await Transaction.find(params.id) as Transaction;
    
        trans.customerName = data.customerName;
        trans.amount = data.amount;
        trans.description = data.description;
        trans.type = data.type;
        await trans.save()
        return response.json(trans)
      }
    public async destroy ({ params, response  }: HttpContextContract) {
        const tran = await Transaction.find(params.id)
        tran?.delete();
        return response.json({"message": "Record deleted successfully! "});
    }
}
