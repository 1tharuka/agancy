import Image from 'next/image';
import work from '../image/WebDesign.gif';
import React from 'react';

const Heroimage = () => {
  return (
    <div className="flex flex-col flex-1 gap-5 mt-5">
      <div className="flex flex-row gap-5 ml-10">
        <div>
          <Image
            src={work}
            width={400}
            height={400}
            alt="work"
            className="rounded-3xl"
          />
        </div>
        <div>
          <Image
            src={work}
            width={400}
            height={400}
            alt="work"
            className="rounded-3xl"
          />
        </div>
        <div>
          <Image
            src={work}
            width={400}
            height={400}
            alt="work"
            className="rounded-3xl"
          />
        </div>
      </div>
      <div className="flex flex-row gap-5 mr-10">
        <div>
          <Image
            src={work}
            width={400}
            height={400}
            alt="work"
            className="rounded-3xl"
          />
        </div>
        <div>
          <Image
            src={work}
            width={400}
            height={400}
            alt="work"
            className="rounded-3xl"
          />
        </div>
        <div>
          <Image
            src={work}
            width={400}
            height={400}
            alt="work"
            className="rounded-3xl"
          />
        </div>
      </div>

      <div className="flex flex-row gap-5 ml-10">
        <div>
          <Image
            src={work}
            width={400}
            height={400}
            alt="work"
            className="rounded-3xl"
          />
        </div>
        <div>
          <Image
            src={work}
            width={400}
            height={400}
            alt="work"
            className="rounded-3xl"
          />
        </div>
        <div>
          <Image
            src={work}
            width={400}
            height={400}
            alt="work"
            className="rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Heroimage;
