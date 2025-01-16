using Microsoft.EntityFrameworkCore;

namespace WebApplication1.Models
{
    public class PaymentDetailContext : DbContext
    {
        public PaymentDetailContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<PaymetDetail> PaymetDetails { get; set; }

        
    }
}
