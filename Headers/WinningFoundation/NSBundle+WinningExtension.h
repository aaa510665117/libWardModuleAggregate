//
//  NSBundle+WinningExtension.h
//  WinningFoundation
//
//  Created by winning on 2019/4/30.
//  Copyright © 2019年 winning. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface NSBundle (WinningExtension)

- (NSString*)wining_contentOfFileWithName: (NSString*)name extension: (NSString*)ext;
- (NSDictionary*)wining_dictionaryFromJSONFileWithName: (NSString*)name;
- (NSArray*)wining_arrayFromJSONFileWithName: (NSString*)name;


@end

NS_ASSUME_NONNULL_END
