import { useMemo } from "react";
import { createAvatar } from "@dicebear/core";

import { adventurer } from "@dicebear/collection";

function Avatar() {
  const avatar = useMemo(() => {
    const randomSeed = Math.random().toString(36).substring(7);
    return createAvatar(adventurer, {
      size: 128,
      seed: randomSeed,
      // ... other options
    }).toDataUriSync();
  }, []);

  return (
    <img
      src={avatar}
      alt="Avatar"
      className="rounded-full bg-slate-300 p-3 object-fill w-fit mx-auto"
    />
  );
}

export default Avatar;
