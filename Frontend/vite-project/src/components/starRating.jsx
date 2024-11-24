function RatingReview({ rating }) {
    return (
      <div>
        {[1, 2, 3, 4, 5].map((star) => {
          return (  
            <span
              className='start'
              style={{
                cursor: 'pointer',
                color: rating >= star ? 'gold' : 'gray',
                fontSize: `35px`,
              }}
             
            >
              {' '}
              ★{' '}
            </span>
          )
        })}
      </div>
    )
  }
  
  export default RatingReview;