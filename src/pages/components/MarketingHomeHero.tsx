import { useState } from 'react'
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'


const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];



const features = [
  {
    name: 'Prospect sales management.',
    description: '',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Increased Metrics Visibility.',
    description: '',
    icon: LockClosedIcon,
  },
  {
    name: 'Bias for Action Insights.',
    description: '',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced security.',
    description: '',
    icon: FingerPrintIcon,
  },
  {
    name: 'Powerful API.',
    description: '',
    icon: Cog6ToothIcon,
  },
  {
    name: 'Database backups.',
    description: '',
    icon: ServerIcon,
  },
];


export default function MarketingHomeHero() {

  return (
  <div>
    <div className="bg-blue-950">
      <div className="relative isolate overflow-hidden pt-14">        
        <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl italic font-light font-serif text-white sm:text-6xl">
              Leverage Product Led Sales to accelerate your expansion strategy
            </h1>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://drive.google.com/file/d/1J6PLyyH1rrUJKynLjojBaquS6oL4KPsT/view?usp=share_link"
                className="rounded-md bg-green-300 px-6 py-4 text-sm font-semibold text-green-700 shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                View the demo
              </a>              
            </div>
          </div>
        </div>        
      </div>
    </div>

    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-3xl font-semibold leading-7 text-blue-900">A better workflow</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Leverage our platform to create great user experiences with the product as the primary driver of customer acquisition, retention, and expansion.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="/clinchit-screen-2.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>


    <div className="bg-green-200 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h3 className="mt-2 text-xl font-bold text-gray-900 sm:text-6xl">
            The Problem
          </h3>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
          <dl className="grid max-w-full grid-cols-1 gap-x-24 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 text-center">
            
              <div className="relative">
                <h4 className='text-3xl font-bold my-4'>Ineffective Prospecting</h4>
                <p className='text-xl font-light'>Sales have limited visibility on Customer Interactions with existing products and key feature usage</p>
              </div>
              
              <div className="relative">
                <h4 className='text-3xl font-bold my-4'>Standard Communication</h4>
                <p className='text-xl font-light '>Standard presentations, and demos with limited customer context used to pitch products</p>
              </div>

          </dl>
        </div>
      </div>
    </div>

    <div className="bg-blue-950 py-24 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="mx-auto lg:mx-0 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-6xl">Our Offering</h2>
          <p className="mt-6 text-3xl leading-8 text-gray-300 font-light">
            Right Customers reached the Right way
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-16 gap-y-16 lg:max-w-none lg:grid-cols-3">
            
              <div className="flex flex-col">
                <div className="text-base font-semibold leading-7 text-white">
                  <div className="my-16">
                    <img src="/clinchit-screen-2.png" alt="Clinchit Screenshot 2" className='h-60' />
                  </div>
                  <h6 className='text-2xl font-bold my-8'>Product Led Insights</h6>
                  <p className='font-light text-gray-200'>Real-time Customer Engagement and Product usage Insights to identify the right expansion customers</p>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="text-base font-semibold leading-7 text-white">
                  <div className="my-16">
                    <img src="/clinchit-screen-1.png" alt="Clinchit Screenshot 1" className='h-60' />
                  </div>
                  <h6 className='text-2xl font-bold my-8'>Prioritizing Opportunities</h6>
                  <p className='font-light text-gray-200'>Prioritizing prospect lists based on Real time customer data and our proprietary Propensity scoring model</p>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="text-base font-semibold leading-7 text-white">
                  <div className="my-16">
                    <img src="/clinchit-screen-3.png" alt="Clinchit Screenshot 3" className='h-60' />
                  </div>
                  <h6 className='text-2xl font-bold my-8'>Targeted Communication</h6>
                  <p className='font-light text-gray-200'>Leverage AI to build Personalized communications and deliver using the Right channel</p>
                </div>
              </div>
          </dl>
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="/product"
          className="rounded-md bg-green-300 px-6 py-4 text-sm font-semibold text-green-700 shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
        >
          Learn more
        </a>              
      </div>
    </div>

  </div>
  )
};
