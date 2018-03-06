import Paypal from 'paypal-ipn'
export default class Controller {

  static process (request, reply) {
    console.log('Payment Received\n', request.body) 
    Paypal.verify(request.body, { 'allow_sandbox' : true }, (error, message) => {
      if (error) {
        reply.code(500).send('Internal')
      } else {
        console.log(`Payment Status: ${request.body.payment_status}`)
      }
    })
  }

}
