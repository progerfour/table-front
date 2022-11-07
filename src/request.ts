const url = "https://ang-football-backend.herokuapp.com";
type Answer = {
    data: any;
}
export class Auth {
    static async createUser(name: string) { 
        const response = await fetch(
            `${url}/users/create`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({name: 'kjjjokjo'})
            }
          );
        
          const result: Answer  = await response.json();

          const {code, errmsg} = result.data;
          if (code) {
              if (code === 11000){
                  return {
                      code: 'error',
                      msg: "Участник с таким именем уже существует"
                  };
              } else {
                console.log(errmsg);
                return {
                    code: 'error',
                    msg: errmsg
                }
              }
          } else {
            return {
                code: 'success'
            }
          }
    }
}