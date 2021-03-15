using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WorkoutManager.Models;

namespace WorkoutManager.Data
{
    public class WorkoutsContext : DbContext
    {
        public WorkoutsContext (DbContextOptions<WorkoutsContext> options)
            : base(options)
        {
        }

        public DbSet<WorkoutManager.Models.Workout> Workout { get; set; }
    }
}
