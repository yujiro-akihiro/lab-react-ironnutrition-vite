export const generateUniqueId = (existingIds) => {
    let newId;
    do {
      newId = Math.random().toString(36).substring(2, 9);
    } while (existingIds.includes(newId));
    return newId;
  };
  