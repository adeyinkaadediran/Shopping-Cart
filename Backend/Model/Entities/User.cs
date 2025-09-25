namespace Backend.Model.Entities
{
    public class User
    {
        public Guid UserId { get; set; } = Guid.NewGuid();  // Primary Key (auto-generated)
        public string FirstName { get; set; }   // User's first name
        public string MiddleName { get; set; }  // User's middle name
        public string LastName { get; set; }    // User's last name
        public int Age { get; set; }            // User's age
        public string Address { get; set; }     // User's address
        public string Email { get; set; }       // User's email (for login)

        public string PasswordHash { get; set; }

    }
}
