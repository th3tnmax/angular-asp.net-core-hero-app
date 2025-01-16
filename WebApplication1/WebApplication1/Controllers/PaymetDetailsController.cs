using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymetDetailsController : ControllerBase
    {
        private readonly PaymentDetailContext _context;

        public PaymetDetailsController(PaymentDetailContext context)
        {
            _context = context;
        }

        // GET: api/PaymetDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PaymetDetail>>> GetPaymetDetails()
        {
          if (_context.PaymetDetails == null)
          {
              return NotFound();
          }
            return await _context.PaymetDetails.ToListAsync();
        }

        // GET: api/PaymetDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PaymetDetail>> GetPaymetDetail(int id)
        {
          if (_context.PaymetDetails == null)
          {
              return NotFound();
          }
            var paymetDetail = await _context.PaymetDetails.FindAsync(id);

            if (paymetDetail == null)
            {
                return NotFound();
            }

            return paymetDetail;
        }

        // PUT: api/PaymetDetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPaymetDetail(int id, PaymetDetail paymetDetail)
        {
            if (id != paymetDetail.PaymentId)
            {
                return BadRequest();
            }

            _context.Entry(paymetDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PaymetDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/PaymetDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PaymetDetail>> PostPaymetDetail(PaymetDetail paymetDetail)
        {
          if (_context.PaymetDetails == null)
          {
              return Problem("Entity set 'PaymentDetailContext.PaymetDetails'  is null.");
          }
            _context.PaymetDetails.Add(paymetDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPaymetDetail", new { id = paymetDetail.PaymentId }, paymetDetail);
        }

        // DELETE: api/PaymetDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePaymetDetail(int id)
        {
            if (_context.PaymetDetails == null)
            {
                return NotFound();
            }
            var paymetDetail = await _context.PaymetDetails.FindAsync(id);
            if (paymetDetail == null)
            {
                return NotFound();
            }

            _context.PaymetDetails.Remove(paymetDetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PaymetDetailExists(int id)
        {
            return (_context.PaymetDetails?.Any(e => e.PaymentId == id)).GetValueOrDefault();
        }
    }
}
