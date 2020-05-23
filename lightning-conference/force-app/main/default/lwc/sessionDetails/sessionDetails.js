import { LightningElement, api } from 'lwc';
export default class sessionDetails extends LightningElement {
  session;
  @api
  // We use the @api decorator to define the session property as public.
  // That way you can provide a session object as an attribute of the 
  // my-session-details tag. Just like properties annotated with @track, 
  // properties annotated with @api are reactive: When their value changes, 
  // the component is automatically rerendered.
  set sessionId(id) {
    this._sessionId = id;
    this.session = {
      id: '1',
      name: 'Mock session',
      dateTime: '2099-01-01 00:00:00',
      room: 'Mock room',
      description: "Mock description",
      speakers: [
        {
          id: '1',
          name: 'Mock speaker 1',
          bio: 'Bio for mock speaker 1',
          email: 'mock1@trailhead.com',
          pictureUrl: 'https://developer.salesforce.com/files/js-dev/speaker-images/john_doe.jpg'
        },
        {
          id: '2',
          name: 'Mock speaker 2',
          bio: 'Bio for mock speaker 2',
          email: 'mock2@trailhead.com',
          pictureUrl: 'https://developer.salesforce.com/files/js-dev/speaker-images/laetitia_arevik.jpg'
        }
      ]
    };
  }
  get sessionId() {
    return this._sessionId;
  }
}