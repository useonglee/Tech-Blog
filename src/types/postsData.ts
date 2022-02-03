export interface AllPostsDataPropsType {
  allPostsData: PostDataType[];
  pageType?: string;
}

export interface PostDataPropsType {
  postData: PostDataType;
}

export interface PostDataType {
  id: string;
  layout: string;
  title: string;
  subTitle: string;
  date: string;
  thumbnail: string;
  contentHtml?: string;
  tags?: string[];
}
