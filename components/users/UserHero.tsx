import Image from "next/image";
import useUser from "@/hooks/useUser";
import Avatar from "../Avatar";

interface UserHeroProps {
    userId: string;
}

const UserHero: React.FC<UserHeroProps> = ({ userId }) => {
    // to get the user
    const { data: fetchedUser } = useUser(userId);

    return (
        <div>
            <div className="bg-neutral-700 h-44 relative">
                {/* for the cover image or banner */}
                {fetchedUser?.coverImage && (
                    <Image
                        src={fetchedUser.coverImage}
                        fill
                        alt="Cover Image"
                        style={{ objectFit: "cover" }}
                    />
                )}
                {/* the profile picture */}
                <div className="absolute -bottom-16 left-4">
                    <Avatar userId={userId} isLarge hasBorder />
                </div>
            </div>
        </div>
    );
};

export default UserHero;
