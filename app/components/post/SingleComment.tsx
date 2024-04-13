import Link from "next/link";
import { useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { BsTrash3 } from "react-icons/bs";
import moment from "moment";
import { SingleCommentCompTypes } from "@/app/types";

const SingleComment = ({ comment, params }: SingleCommentCompTypes) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const deleteThisComment = async () => {
    let res = confirm("Are you sure you weant to delete this comment?");
    if (!res) return;

    try {
      setIsDeleting(true);

      setIsDeleting(false);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  return (
    <div>
      <div
        id="SingleComment"
        className="flex items-center justify-between px-8 mt-4"
      >
        <div className="flex items-center relative w-full">
          <Link href={`/profile/${comment.profile.user_id}`}>
            <img
              className="absolute top-0 rounded-full lg:mx-0 mx-auto"
              width="40"
              title="image"
            />
          </Link>
          <div className="ml-14 pt-0.5 w-full">
            <div className="text-[18px] font-semibold flex items-center justify-between">
              <span className="flex items-center">
                {comment?.profile?.name} -
                <span className="text-[12px] text-gray-600 font-light ml-1">
                  {moment(comment?.created_at).calendar()}
                </span>
              </span>


            </div>

            <p className="text-[15px] font-light">{comment.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleComment;
