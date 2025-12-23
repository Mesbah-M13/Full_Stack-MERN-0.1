//  ✅🌟🌟🌟 V V I


interface Ipost {
  title: string;
  id: number;
  description: string;
}

interface Iuser {
  id: number;
  name: string;
  age: number;
  address: string;
}

const fetchPostData = async (url: string): Promise<Ipost[]> => {
  const response = await fetch(`http://example.com${path}`);
  return response.json();
};
const fetchUsersData = async (url: string): Promise<Iuser[]> => {
  const response = await fetch(`http://example.com${path}`);
  return response.json();
};

(async () => {
  // const posts = await fetchPostData("/post");
  const users = await fetchUsersData("/user");
  users[0].name;
})();

// using complete generics

const fetchData = async <ResultTYpe>(path: string): Promise<ResultTYpe> => {
  const response = await fetch(`http://example.com`);
  return response.json();
};

((async()=>{

  // const users = await fetchData<Iuser[]>('/users')
  const posts = await fetchData<Ipost[]>('/posts')
  posts[0].
}))()