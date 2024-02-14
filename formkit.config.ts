import { generateClasses } from '@formkit/themes'

const config = {
  config: {
    classes: generateClasses({
      global: {
        label: 'text-gray-500 font-semibold',
        message: 'text-red-500 font-semibold mb-5',
        wrapper: 'space-y-2 mb-3',
        input: 'border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500 w-full',
      },
      checkbox: {
        outer: 'space-y-',
        options: 'grid grid-cols-6',
        label: 'flex',
        fieldset: 'w-full',
        legend: 'text-gray-500 font-semibold my-5',
        wrapper: '$reset flex items-center gap-2 space-y-2',
        input: '$reset checked:bg-blue-500 focus:outline-none m-auto',
      },
      textarea: {
        outer: 'mt-5',
        help: 'text-gray-500'
      },
      select: {
        legend: 'my-10',
      },
      submit: {
        input: '$reset bg-blue-500 w-full py-2 rounded-lg text-white font-semibold text-lg hover:bg-blue-600 transition-colors mt-10'
      }
    })
  }
}


export default config;