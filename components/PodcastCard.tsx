import Image from 'next/image'
import React from 'react'

const PodcastCard = ({imgURL,title,description,podcastId    
}: {
    imgURL: string,
    title: string,
    description: string,
    podcastId: number
   }) => {
  return (
    <div className='cursor-pointer '>
        <figure className='flex flex-col gap-2'>
            <Image className='aspect-square h-fit w-full rounded-xl 2xl:size-[200px]' src={imgURL} height={174} width={174} alt={title} />
            <div className='flex flex-col'>
                <h1 className='text-16 truncate font-bold text-white-1'>{title}</h1>
                <h2 className='text-12 truncate font-normal capitalize text-white-4'>{description}</h2>
            </div>
        </figure>
    </div>
  )
}

export default PodcastCard