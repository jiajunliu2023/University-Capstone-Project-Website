using System;
using Google.Apis.Auth;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;

namespace Capstone_MVP
{
	public class Google_Apis_Auth
	{
        public async Task<GoogleJsonWebSignature.Payload> VerifyIdTokenAsync(string Token)
        {
            var set = new GoogleJsonWebSignature.ValidationSettings()
            {
                Audience = new List<string>() { "945265454572-flnctp4ptbd5g9it11c9bca4g5reg163" }
            };

            var payload = await GoogleJsonWebSignature.ValidateAsync(Token, set);

            return payload;
        }

        public async Task<GoogleJsonWebSignature.Payload> AuthenticateUserAsync(string Token)
        {
            var payload = await VerifyIdTokenAsync(Token);
            var email = payload.Email;
            var name = payload.Name;
            // Use the payload to authenticate the user in your application
            return payload;
        }
      
       
    }
}

