using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;

namespace Jewellery.Data
{
    public class DataOperationRepository<TDBEntity>: IDataOperationRepository<TDBEntity> where TDBEntity: class
    {
        private DbContext dbContext;
        private DbSet<TDBEntity> dbSetEntities;

        public DataOperationRepository(DbContext context)
        {
            dbContext = context;
            dbSetEntities = context.Set<TDBEntity>();
        }

        private IQueryable<TDBEntity> GetAllIncluding(params Expression<Func<TDBEntity, object>>[] includeProperties)
        {
            IQueryable<TDBEntity> queryable = dbSetEntities.AsNoTracking();

            return includeProperties.Aggregate(queryable, (current, includeProperty) => current.Include(includeProperty));
        }

        public IEnumerable<TDBEntity> All()
        {
            return dbSetEntities.AsNoTracking().ToList();
        }

        public IEnumerable<TDBEntity> AllInclude(params Expression<Func<TDBEntity, object>>[] includeProperties)
        {
            return this.GetAllIncluding(includeProperties).ToList();
        }

        public IEnumerable<TDBEntity> FindByInclude(Expression<Func<TDBEntity, bool>> predicate, params Expression<Func<TDBEntity, object>>[] includeProperties)
        {
            var query = GetAllIncluding(includeProperties);
            IEnumerable<TDBEntity> results = query.Where(predicate).ToList();
            return results;
        }

        public IEnumerable<TDBEntity> FindBy(Expression<Func<TDBEntity, bool>> predicate)
        {

            IEnumerable<TDBEntity> results = dbSetEntities.AsNoTracking()
              .Where(predicate).ToList();
            return results;
        }

        public void Insert(TDBEntity entity)
        {
            dbSetEntities.Add(entity);
            dbContext.SaveChanges();
        }

        public void Update(TDBEntity entity)
        {
            dbSetEntities.Attach(entity);
            dbContext.Entry(entity).State = EntityState.Modified;
            dbContext.SaveChanges();
        }

        public void Delete(TDBEntity entity)
        {
            dbSetEntities.Remove(entity);
            dbContext.SaveChanges();
        }
    }
}
