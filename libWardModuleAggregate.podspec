#
#  Be sure to run `pod spec lint libWardModuleAggregate.podspec' to ensure this is a
#  valid spec and to remove all comments including this before submitting the spec.
#
#  To learn more about Podspec attributes see http://docs.cocoapods.org/specification.html
#  To see working Podspecs in the CocoaPods repo see https://github.com/CocoaPods/Specs/
#

Pod::Spec.new do |s|

  # ―――  Spec Metadata  ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――― #
  #
  #  These will help people to find your library, and whilst it
  #  can feel like a chore to fill in it's definitely to your advantage. The
  #  summary should be tweet-length, and the description more in depth.
  #

  s.name         = "libWardModuleAggregate"
  s.version      = "1.0.4"
  s.summary      = "A short description of libWardModuleAggregate."

  # This description is used to generate tags and improve search results.
  #   * Think: What does it do? Why did you write it? What is the focus?
  #   * Try to keep it short, snappy and to the point.
  #   * Write the description between the DESC delimiters below.
  #   * Finally, don't worry about the indent, CocoaPods strips it!
  s.description  = <<-DESC
			libWardModuleAggregate是一个自定义第三方类库
                   DESC

  s.homepage     = "https://github.com/aaa510665117/libWardModuleAggregate"
  # s.screenshots  = "www.example.com/screenshots_1.gif", "www.example.com/screenshots_2.gif"


  # ―――  Spec License  ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――― #
  #
  #  Licensing your code is important. See http://choosealicense.com for more info.
  #  CocoaPods will detect a license file if there is a named LICENSE*
  #  Popular ones are 'MIT', 'BSD' and 'Apache License, Version 2.0'.
  #

  s.license      = { :type => "MIT", :file => "LICENSE" }
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }


  # ――― Author Metadata  ――――――――――――――――――――――――――――――――――――――――――――――――――――――――― #
  #
  #  Specify the authors of the library, with email addresses. Email addresses
  #  of the authors are extracted from the SCM log. E.g. $ git log. CocoaPods also
  #  accepts just a name if you'd rather not provide an email address.
  #
  #  Specify a social_media_url where others can refer to, for example a twitter
  #  profile URL.
  #

  s.author             = { "ZY" => "510665117@qq.com" }
  # Or just: s.author    = "ZY"
  # s.authors            = { "ZY" => "510665117@qq.com" }
  # s.social_media_url   = "http://twitter.com/ZY"

  # ――― Platform Specifics ――――――――――――――――――――――――――――――――――――――――――――――――――――――― #
  #
  #  If this Pod runs only on iOS or OS X, then specify the platform and
  #  the deployment target. You can optionally include the target after the platform.
  #

  # s.platform     = :ios
    s.platform     = :ios, "8.0"

  #  When using multiple platforms
  # s.ios.deployment_target = "5.0"
  # s.osx.deployment_target = "10.7"
  # s.watchos.deployment_target = "2.0"
  # s.tvos.deployment_target = "9.0"


  # ――― Source Location ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――― #
  #
  #  Specify the location from where the source should be retrieved.
  #  Supports git, hg, bzr, svn and HTTP.
  #

  s.source       = { :git => "https://github.com/aaa510665117/libWardModuleAggregate.git", :tag => "#{s.version}" }


  # ――― Source Code ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――― #
  #
  #  CocoaPods is smart about how it includes source code. For source files
  #  giving a folder will include any swift, h, m, mm, c & cpp files.
  #  For header files it will include any header in the folder.
  #  Not including the public_header_files will make all headers public.
  #

  
  #s.source_files  = "libWardModuleAggregate"
  #s.source_files = "libWardModuleAggregate/**/*.{h,m}"

  s.subspec 'WardModuleAggregate' do |ss|
    ss.dependency 'Masonry', '~>1.1.0'
    ss.dependency 'GVUserDefaults', '~>1.0.2'
    ss.dependency 'SDWebImage', '~>5.0.1'
    ss.dependency 'AFNetworking', '~>3.2.1'
    ss.dependency 'MJRefresh', '~>3.2.0'
    ss.dependency 'YYModel', '~>1.0.4'
    ss.dependency 'ReactiveCocoa', '~>2.4.7'
    ss.dependency 'MBProgressHUD', '~> 1.1.0'
    ss.dependency 'Toast', '~> 2.4'
    ss.dependency 'SVProgressHUD', '~> 2.2.5'
    ss.dependency 'CTPersistance'
    ss.dependency 'FMDB', '~> 2.7.5'
    ss.dependency 'Reachability', '~> 3.2'
    ss.dependency 'SGQRCode', '~> 2.2.0'
    ss.dependency 'FSActionSheet', '~> 1.0.1'
    ss.dependency 'EZImageBrowserKit', '~> 0.0.2'
    ss.dependency 'TZImagePickerController', '~> 2.1.4'
    ss.dependency 'IQKeyboardManager'
    ss.dependency 'JPush', '3.2.2-noidfa'
    ss.dependency 'ZBarSDK', '~> 1.3.1'
    ss.dependency 'NIMSDK', '~> 4.5.0'
    ss.dependency 'AvoidCrash', '~> 2.5.2'
    ss.dependency 'ZYModule', '~> 1.0.28'

    ss.resources 	    = 'Bundles/*.{png,xib,nib,bundle}' , 'USC/*.{png,xib,nib,bundle}'
    #ss.public_header_files  = 'Headers/**/*.h'
    ss.source_files  = 'Headers/**/*.h' ,  'BaiDu/BDSClientHeaders/**/*.h' , 'USC/*.h'
    ss.vendored_libraries   = 'StaticLibs/*.a' , 'BaiDu/BDSClientLib/*.a'
    ss.vendored_frameworks  = 'USC/USCModule.framework'
  end


  s.exclude_files = "Classes/Exclude"

  # s.public_header_files = "Classes/**/*.h"
  #s.resources = "ZYModule/Resources/*.{png,xib,nib,bundle}"


  # ――― Resources ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――― #
  #
  #  A list of resources included with the Pod. These are copied into the
  #  target bundle with a build phase script. Anything else will be cleaned.
  #  You can preserve files from being cleaned, please don't preserve
  #  non-essential files like tests, examples and documentation.
  #

  # s.resource  = "icon.png"
  # s.resources = "Resources/*.png"

  # s.preserve_paths = "FilesToSave", "MoreFilesToSave"


  # ――― Project Linking ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――― #
  #
  #  Link your library with frameworks, or libraries. Libraries do not include
  #  the lib prefix of their name.
  #

  # s.framework  = "SomeFramework"
  # s.frameworks = "SomeFramework", "AnotherFramework"

  # s.library   = "iconv"
  # s.libraries = "iconv", "xml2"


  # ――― Project Settings ――――――――――――――――――――――――――――――――――――――――――――――――――――――――― #
  #
  #  If your library depends on compiler flags you can set them in the xcconfig hash
  #  where they will only apply to your library. If you depend on other Podspecs
  #  you can include multiple dependencies to ensure it works.

  # s.requires_arc = true

  # s.xcconfig = { "HEADER_SEARCH_PATHS" => "$(SDKROOT)/usr/include/libxml2" }
  #s.dependency "Masonry"
  #s.dependency "AFNetworking"
  #s.dependency "UAProgressView"
  #s.dependency "SBJson5", "~>5.0.0"
  #s.dependency "Colours" , "~> 5.13.0"
  #s.dependency "AFSoundManager" , "~> 2.1"
  #s.dependency "ZLPhotoBrowser" , "~> 3.0.6"

end
