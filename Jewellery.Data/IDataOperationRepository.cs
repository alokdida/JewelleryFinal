using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Jewellery.Data
{
    public interface IDataOperationRepository<TDBEntity> where TDBEntity : class
    {
        IEnumerable<TDBEntity> All();

        IEnumerable<TDBEntity> AllInclude(params Expression<Func<TDBEntity, object>>[] includeProperties);

        IEnumerable<TDBEntity> FindByInclude(Expression<Func<TDBEntity, bool>> predicate, params Expression<Func<TDBEntity, object>>[] includeProperties);

        IEnumerable<TDBEntity> FindBy(Expression<Func<TDBEntity, bool>> predicate);

        void Insert(TDBEntity entity);

        void Update(TDBEntity entity);

        void Delete(TDBEntity entity);
    }          
}
