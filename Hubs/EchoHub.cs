using Microsoft.AspNetCore.SignalR;

namespace SignalRdotNetAngular5 {
    public class EchoHub:Hub{
        public void Echo(string message) {
            Clients.All.SendAsync("Send",message);
        }
    }
}