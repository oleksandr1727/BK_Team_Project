using System.ComponentModel.DataAnnotations;

namespace BK_Team_Project.Data.Entities
{
    public class Bet
    {
        public int Id { get; set; }
        [Required]
        public int Number_Of_Bet { get; set; }
        [Required]
        public int Number_Of_Matches { get; set; }
        [Required]
        public int CategoryId {get; set; }
        public int BetSum { get; set; }
        [Required]
        public Category? Category{ get; set; }
        public int MatchId { get; set; }
    }
}
