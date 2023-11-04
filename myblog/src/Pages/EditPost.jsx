import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import PostForm from '../components/PostForm'
import { useNavigate, useParams } from "react-router-dom";
import appwriteservice from "../appwrite/config";

function EditPost() {
  const [post, setposts] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteservice.getpost(slug).then((post) => {
        if (post) {
          setposts(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return post ? (
    <div>
      <Container>
        <PostForm post={post}/>
      </Container>
    </div>
  ) : null;
}
export default EditPost;
