import React from 'react';
import ProfileForm from './_components/ProfileForm';

function ProfileFormPage() {
  return (
    <main className="flex justify-center items-center w-full pt-[100px] pb-[200px] min-h-screen bg-neutral-50 flex-grow md:mt-[46px] md:mb-[199px]">
      <ProfileForm />
    </main>
  );
}

export default ProfileFormPage;
