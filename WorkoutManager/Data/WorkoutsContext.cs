using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WorkoutManager.Models;

namespace WorkoutManager.Data
{
    //  Database context provides a way for the C# code to access a database.
    public class WorkoutsContext : DbContext
    {
        public WorkoutsContext (DbContextOptions<WorkoutsContext> options)
            : base(options)
        {
        }

        //  Add a database set of type "Workout" to the context. 
        public DbSet<WorkoutManager.Models.Workout> Workout { get; set; }
    }
}
