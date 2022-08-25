import React, { useState } from 'react';
import { Label, TextInput } from 'flowbite-react';

const SearchUser = () => {
  const [username, setUsername] = useState('');

  return (
    <div className="ml-5">
      <div className="mb-2 block">
        <Label htmlFor="username" />
      </div>
      <TextInput
        id="username3"
        placeholder="Bill Gates"
        required={true}
        addon="@"
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
  );
};

export default SearchUser;
