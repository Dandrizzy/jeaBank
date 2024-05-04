import { FaCloudArrowUp, FaFingerprint, FaServer } from 'react-icons/fa6';

const features = [
 {
  name: 'Instant Banking.',
  description:
   'Seamless and rapid processing of financial transactions, allowing customers to access and manage their funds in real-time. ',
  icon: FaCloudArrowUp,
 },
 {
  name: 'Security.',
  description: 'Our robust security measures and protocols, we demonstrate our commitment to safeguarding customer information and providing a secure and reliable banking experience in an increasingly digital world.',
  icon: FaFingerprint,
 },
 {
  name: 'Automated Transactions.',
  description: 'Implement automated transaction processing for transfers, payments, and deposits to minimize manual intervention, reduce processing times, and ensure seamless fund transfers.',
  icon: FaServer,
 },
];

export default function Innovate() {
 return (
  <div className="overflow-hidden bg-white py-24 sm:py-32">
   <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
     <div className="lg:pr-8 lg:pt-4">
      <div className="lg:max-w-lg">
       <h2 className="text-base font-semibold leading-7 text-blue-600">Bank faster</h2>
       <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</p>
       <p className="mt-6 text-lg leading-8 text-gray-600">
        Optimizing digital processes to enhance efficiency, accuracy, and customer satisfaction. Improved operational efficiency, enhanced customer experience, and sustained growth in the digital banking landscape.
       </p>
       <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
        {features.map((feature) => (
         <div key={feature.name} className="relative pl-9">
          <dt className="inline font-semibold text-gray-900">
           <feature.icon className="absolute left-1 top-1 h-5 w-5 text-blue-600" aria-hidden="true" />
           {feature.name}
          </dt>{' '}
          <dd className="inline">{feature.description}</dd>
         </div>
        ))}
       </dl>
      </div>
     </div>
     <img
      src="/innovate.jpg"
      alt="Product screenshot"
      className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
      width={2432}
      height={1442}
     />
    </div>
   </div>
  </div>
 );
}
