import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        console.log('Сортировка...');
        if(sort) {
          //здесь мы сортируем копию массива из-за [], а не исходник
          return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts;
      }, [sort, posts]) //сортировка в рендере происходит при каждом изменении в поиске
      //что являет собой большую нагрузку на производительность, здесь лучше использовать хук useMemo()
      //Он принимает результат математических действий и кеширует, чтобы не пересчитывать.
      //Но если зависимости поменяются, например, вид сортировки, то он снова пересчитывает и кеширует заново
    return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort);
    
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
      }, [query, sortedPosts])

    return sortedAndSearchedPosts;
}