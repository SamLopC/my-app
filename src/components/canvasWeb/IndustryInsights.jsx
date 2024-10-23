/**
 * This code was generated by Builder.io.
 */
import React from 'react'
import InsightCard from './InsightCard'

function IndustryInsights() {
  const insights = [
    {
      image:
        'https://cdn.builder.io/api/v1/image/assets/e4c57968c0bc4afc844f2d99ccd20654/79cc280fc3ef5f5f20d44b55c4a1aeb9d2233d323706941bfd7943528da40c27?apiKey=e4c57968c0bc4afc844f2d99ccd20654&',
      category: 'Technology',
      title: 'AI-Powered OCR and Computer Vision: Advancing Fraud Detection in Financial Document Processing',
    },
    {
      image:
        'https://cdn.builder.io/api/v1/image/assets/e4c57968c0bc4afc844f2d99ccd20654/cd0d5b4d8d4256847a5a39a4f37edd2bc3adb3ec36dea1c4072e70d4a1673aa3?apiKey=e4c57968c0bc4afc844f2d99ccd20654&',
      category: 'Fields Supported',
      title: 'Bank Statements ► Bank Information',
    },
    {
      image:
        'https://cdn.builder.io/api/v1/image/assets/e4c57968c0bc4afc844f2d99ccd20654/6855ba572c2c6281f2c3d9b10815a1bcdcca6e27b5a09a8e2e79495c6f4c30fc?apiKey=e4c57968c0bc4afc844f2d99ccd20654&',
      category: 'Fields Supported',
      title: 'Bank Statements ► Transaction Line-Items',
    },
    {
      image:
        'https://cdn.builder.io/api/v1/image/assets/e4c57968c0bc4afc844f2d99ccd20654/916c3e14d8884d78649f949718db9bdf29010fb94c6d52b8b0889c134d595689?apiKey=e4c57968c0bc4afc844f2d99ccd20654&',
      category: 'Fields Supported',
      title: 'Bank Statements ► Totals',
    },
    {
      image:
        'https://cdn.builder.io/api/v1/image/assets/e4c57968c0bc4afc844f2d99ccd20654/7b2840407d96a840709034fcf3e59a08ec6f43b5336e0d3ac9a833fb7e4cdb06?apiKey=e4c57968c0bc4afc844f2d99ccd20654&',
      category: 'Fields Supported',
      title: 'Bank Statements ►Account Information Fields',
    },
  ]

  return (
    <section className='flex flex-col items-center px-16 pt-24 w-full max-md:px-5 max-md:max-w-full'>
      <div className='flex flex-col justify-center px-40 w-full max-w-[1800px] max-md:px-5 max-md:max-w-full'>
        <div className='flex flex-col w-full min-h-[820px] max-md:max-w-full'>
          <div className='flex flex-wrap gap-6 justify-center w-full max-md:max-w-full'>
            <h2 className='flex relative flex-col grow shrink text-5xl leading-[56px] min-w-[240px] text-slate-800 w-[771px] max-md:max-w-full'>
              <span className='z-0 opacity-10 max-md:max-w-full max-md:text-4xl max-md:leading-[52px]'>
                Dig deeper into our tech stack &<br /> industry insights
              </span>
              <span className='absolute max-w-full w-[888px] max-md:max-w-full max-md:text-4xl max-md:leading-[52px]'>
                Dig deeper into our tech stack &<br /> industry insights
              </span>
            </h2>
            <div className='flex flex-wrap grow shrink gap-0.5 items-center py-6 h-full min-w-[240px] w-[467px] max-md:max-w-full'>
              <button className='flex justify-center items-center self-stretch px-7 my-auto w-16 h-16 rounded opacity-50 bg-slate-800 max-md:px-5'>
                <img
                  loading='lazy'
                  src='https://cdn.builder.io/api/v1/image/assets/e4c57968c0bc4afc844f2d99ccd20654/b84570c28322354d339b9b7a653c6322ad315c4c9a3f710be671ae8ff6968b15?apiKey=e4c57968c0bc4afc844f2d99ccd20654&'
                  alt='Previous'
                  className='object-contain self-stretch my-auto w-1.5 aspect-[0.5]'
                />
              </button>
              <button className='flex justify-center items-center self-stretch px-7 my-auto w-16 h-16 rounded bg-slate-800 max-md:px-5'>
                <img
                  loading='lazy'
                  src='https://cdn.builder.io/api/v1/image/assets/e4c57968c0bc4afc844f2d99ccd20654/f299c314ccd10d33d064c71d86ba39c6049f53db1b8a35037416276b3e01e14f?apiKey=e4c57968c0bc4afc844f2d99ccd20654&'
                  alt='Next'
                  className='object-contain self-stretch my-auto w-1.5 aspect-[0.5]'
                />
              </button>
            </div>
          </div>
          <div className='flex overflow-hidden flex-col justify-center items-start mt-10 w-full max-md:max-w-full'>
            <div className='flex flex-wrap flex-1 size-full'>
              {insights.map((insight, index) => (
                <InsightCard key={index} {...insight} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndustryInsights
