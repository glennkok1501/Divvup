import { themes } from '@tamagui/themes';
import { BellIcon, UserPenIcon } from 'lucide-react-native';
import { Avatar, Button, SizableText, XStack, YStack } from 'tamagui';
import NumShort from './NumberShorterner';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View } from 'react-native';

const ProfileView = () => {
  const name = 'John Smith';
  const friendsCount = 12332;

  return (
    <YStack gap="$2">
      <XStack justifyContent="space-between">
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
              {name}
            </SizableText>
            <SizableText size="$2" theme="alt1">
              Friends: {NumShort(friendsCount)}
            </SizableText>
          </View>
        </YStack>
        <TouchableOpacity>
          <BellIcon color={themes.light.color} />
        </TouchableOpacity>
      </XStack>
      <Button themeInverse size="$3" color={themes.dark.color} icon={UserPenIcon}>
        Edit Profile
      </Button>
    </YStack>
  );
};

export default ProfileView;

