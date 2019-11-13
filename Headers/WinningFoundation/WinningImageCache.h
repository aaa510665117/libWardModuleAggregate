//
//  WinningImageCache.h
//  WinningFoundation
//
//  Created by winning on 2019/4/29.
//  Copyright © 2019年 winning. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

typedef void(^LBKImageDownloadCompletion)(UIImage* image, NSError *error);

NS_ASSUME_NONNULL_BEGIN

@interface WinningImageCache : NSObject

+ (void)downloadImageWithURL: (NSURL*)url;

+ (void)downloadImageWithURL: (NSURL*)url completion: (LBKImageDownloadCompletion)completion;

+ (UIImage*)cachedImageWithURL: (NSURL*)url;


@end

NS_ASSUME_NONNULL_END
