export interface AllPostsDataPropsType {
  allPostsData: PostDataType[];
}

export interface PostDataPropsType {
  postData: PostDataType;
}

export interface PostDataType {
  id?: string;
  date: string;
  title: string;
  contentHtml?: string;
}
