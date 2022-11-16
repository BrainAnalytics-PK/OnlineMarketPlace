import React from 'react'

const TopPickCard = ({toppick}) => {
  return (
    <div>
        <p>
            {toppick.title}
        </p>
        <img src={toppick.image} alt="" />
    </div>
  )
}

export default TopPickCard