namespace BK_Team_Project.Data.Entities
{
    public class Match_Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Match>? Matches { get; set; }
    }
}
