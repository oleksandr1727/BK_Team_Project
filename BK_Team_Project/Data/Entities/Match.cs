namespace BK_Team_Project.Data.Entities
{
    public class Match
    {
        public int Id { get; set; }
        public string Team1 { get; set; }
        public string Team2 { get; set; }
        public Match_Category Category { get; set; }
        public int Team1_Wincoef { get; set; }
        public int Team2_Wincoef { get; set; }
        public int DrawCoef { get; set; }
    }
}
