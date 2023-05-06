import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import useCurrentUser from "@/hooks/useCurrentUser";
import useEditModal from "@/hooks/useEditModal";
import useUser from "@/hooks/useUser";
import Modal from "../Modal";
import Input from "../Input";

const EditModal = () => {
    // the hooks we will need/use: useCurrent user, fetch the user, and the editmodals
    const { data: currentUser } = useCurrentUser();
    const { mutate: mutateFetchedUser } = useUser(currentUser?.id);
    const editModal = useEditModal();

    // states to carry the new info
    const [profileImage, setProfileImage] = useState("");
    const [coverImage, setCoverImage] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [bio, setBio] = useState("");

    // to update all the states, to initialize them with the initial/current values
    // before updating them. Not recommended to pass objects into dependecy arrays.
    useEffect(() => {
        setProfileImage(currentUser?.profileImage);
        setCoverImage(currentUser?.coverImage);
        setName(currentUser?.name);
        setUsername(currentUser?.username);
        setBio(currentUser?.bio);
    }, [
        currentUser?.name,
        currentUser?.username,
        currentUser?.bio,
        currentUser?.profileImage,
        currentUser?.coverImage,
    ]);

    // to track IF the action is loading or not
    const [isLoading, setIsLoading] = useState(false);

    // when you submit your new values to your profile and send them to the database
    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);

            // with AXIOS we're sending our data to the router, which is in the Edit.ts file
            // we wrote there we want only PATCH method.
            await axios.patch("/api/edit", {
                name,
                username,
                bio,
                profileImage,
                coverImage,
            });

            mutateFetchedUser();

            toast.success("Updated");

            editModal.onClose();
        } catch (error) {
            toast.error("Something went wrong");
        } finally {
            setIsLoading(false);
        }
    }, [
        editModal,
        name,
        username,
        bio,
        mutateFetchedUser,
        profileImage,
        coverImage,
    ]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                disabled={isLoading}
            />
            <Input
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                disabled={isLoading}
            />
            <Input
                placeholder="Bio"
                onChange={(e) => setBio(e.target.value)}
                value={bio}
                disabled={isLoading}
            />
        </div>
    );

    return (
        <Modal
            disabled={isLoading}
            isOpen={editModal.isOpen}
            onClose={editModal.onClose}
            title="Edit your profile"
            actionLabel="Save"
            onSubmit={onSubmit}
            body={bodyContent}
        />
    );
};

export default EditModal;
