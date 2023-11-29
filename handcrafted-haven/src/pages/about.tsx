<<<<<<< HEAD
 import Layout from '../components/layouts/Layout'
 
export default function Page() {
  return (
    <div className="bg-sandstone">
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-4">About Page</h1>
      <section>
        {/* About content */}
      </section>
    </main>
  </div>
  )
}
 
Page.getLayout = function getLayout(page: any) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
=======
import React from 'react';

const AboutPage: React.FC = () => {
  return (
      <div className="bg-sandstone">
        <main className="p-8">
          <h1 className="text-4xl font-bold mb-4">About Page</h1>
          <section>
            {/* About content */}
          </section>
        </main>
      </div>
  );
};

export default AboutPage;
>>>>>>> 3e5c7c5cecf4af4e49ff752a948c717716822f39
