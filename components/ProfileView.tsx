/* eslint-disable prettier/prettier */
import { themes } from '@tamagui/themes';
import { UserPenIcon } from 'lucide-react-native';
import { Avatar, Button, SizableText, View, XStack, YStack } from 'tamagui';

import NumShort from './NumberShorterner';
const ProfileView = ({user} : {user: any}) => {
    
  return (
    <YStack gap="$2">
      <XStack>
        <YStack gap="$2" alignItems="flex-start">
          <Avatar circular size="$10">
            <Avatar.Image
              accessibilityLabel="Cam"
              src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
            />
            <Avatar.Fallback backgroundColor="$blue10" />
          </Avatar>
          <View>
            <SizableText size="$7" fontWeight="500">
              {user.username}
            </SizableText>
            <SizableText size="$5" theme="alt1">
              Friends: {NumShort(user.friendsCount)}
            </SizableText> 
          </View>
          <View />
        </YStack>
      </XStack>
      <Button themeInverse size="$3" color={themes.dark.color} icon={UserPenIcon}>
        Edit Profile
      </Button>
    </YStack>
  );
};

export default ProfileView;
