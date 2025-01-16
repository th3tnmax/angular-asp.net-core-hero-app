using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApplication1.Models
{
    public class PaymetDetail
    {
        [Key]
        public int PaymentId { get; set; }

        [Column(TypeName ="nvarchar(100)")]
        public string CardOwnerName { get; set; } = "";

        [Column(TypeName = "nvarchar(16)")]
        public string CardNumber { get; set; } = "";

        [Column(TypeName = "nvarchar(5)")]
        public string ExpirationDAte { get; set; } = "";

        [Column(TypeName = "nvarchar(3)")]
        public string SecurityCode { get; set; } = "";

    }
}