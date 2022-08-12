function immutableMerge(orig, added, removed) {
  const newList = [...orig];

  for (let e of added) {
    if (!newList.includes(e)) {
      newList.push(e);
    }
  }

  const filteredList = newList.filter((item) => !removed.includes(item));
  return filteredList.sort((a, b) => b.localeCompare(a));
}

console.log(
  immutableMerge(
    ["one", "two", "three"],
    ["one", "two", "five", "six"],
    ["two", "five"]
  )
);
