using Microsoft.EntityFrameworkCore.SqlServer.Query.Internal;

namespace BK_Team_Project.Data.Entities
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Bet>? Bets { get; set; }
    }
}
