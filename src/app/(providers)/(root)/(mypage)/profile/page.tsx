import React from 'react';
import ProfileForm from './_components/ProfileForm';

function ProfileFormPage() {
  return (
    <main className="container flex flex-col justify-between w-full min-h-screen bg-neutral-50">
      <ProfileForm />
    </main>
  );
}

export default ProfileFormPage;
